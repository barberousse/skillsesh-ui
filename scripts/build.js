var fb = require('../app/data/firenext'),
	geo = require('../app/data/geofire'),
	profileRef = fb.child('profiles'),
	memberRef = fb.child('members'),
	fake = require('casual'),
	uuid = require('uuid');

var firstName = function* firstName(){
	while(true){
		yield fake.first_name;
	}
}

var lastName = function* lastName(){
	while(true){
		yield fake.last_name;
	}
}

var shortname = function* shortname(){
	while(true){
		yield fake.username;
	}
}

var gender = function* gender(){
	while(true){
		yield Math.floor(fake.random * 10) % 2 === 0 ? "female" : "male";
	}
}

var avatar = function* avatar(){
	var path = ['women', 'men'][Math.floor( fake.random * 10) % 2],
		num = fake.integer(1, 99);

	while(true){
		yield `https://randomuser.me/api/portraits/${path}/${num}.jpg`;
	}
}

var email = function* email(){
	while(true){
		yield fake.email;
	}
}

var zipcode = function* zipcode(){
	while(true){
		yield fake.integer(60601, 60701);
	}
}

var bio = function* bio(){
	while(true){
		yield fake.sentences(3);
	}
}

var skill = function* skill(){
	var skills = 
	[
		"dancing",
		"french",
		"javscript",
		"gardening",
		"vegan cusine",
		"lettering",
		"book binding",
		"rock climbing"
	];

	while(true){
		yield skills[fake.integer(0, skills.length - 1)];
	}
}

var rate = function* rate(){
	while(true){
		yield fake.integer(10, 100);
	}
}

var ID = function* ID(){
	while(true){
		yield uuid.v4();
	}
}

var profile = function* profile(){
	var genRate = rate(),
		genSkill = skill(),
		genQuote = bio(),
		genID = ID();
	
	while(true){
		yield Object.assign({}, {
			guid: genID.next().value,
			rate: genRate.next().value,
			skill: genSkill.next().value,
			statement: genQuote.next().value
		});
	}
}

var member = function* member(){
	var genFirstName = firstName(),
		genLastName = lastName(),
		genShortname = shortname(),
		genGender = gender(),
		genAvatar = avatar(),
		genEmail = email(),
		genZipcode = zipcode(),
		genBio = bio(),
		genProfile = profile(),
		genID = ID();

	while(true){
		yield Object.assign({}, {
			firstName: genFirstName.next().value,
			lastName: genLastName.next().value,
			shortname: genShortname.next().value,
			avatar: genAvatar.next().value,
			email: genEmail.next().value,
			zipcode: genZipcode.next().value,
			bio: genBio.next().value,
			guid: genID.next().value
		});
	}
};

var padCoords = function padCoords(prefix, n){
	return n < 1000 && n >= 100 ? Number(`${prefix}0${n}`) : Number(`${prefix}00${n}`);
}

var coords = function* coords(){
	var latTempl = 41.91,
		lonTempl = -87.68;
	
	while(true){
		yield [padCoords(latTempl, fake.integer(1,9999)), padCoords(lonTempl, fake.integer(1, 9999))];
	}
};

var buildProfiles = function buildProfiles(){
	var genProfile = profile(),
		numProfile = fake.integer(1,5),
		profiles = [];

	while(numProfile-- !== 0){
		profiles.push( genProfile.next().value );
	}

	return profiles;
}

var buildMember = function buildMember(){
	var genMember = member();

	return genMember.next().value;
}

var addIndex = function addIndex(member, profiles){
	member.profiles = {};

	profiles.forEach(profile =>{
		member.profiles[profile.guid] = true;
		profile.member = member.guid;
	});
}

var setLocation = function setLocation(profile){
	var genCoords = coords();
	geo.set( profile.guid, genCoords.next().value ).then( console.log(`${profile.guid} is located`) );
}

var setMember = function setMember(member){
	memberRef.child(member.guid).set(member).then(console.log(`Member #${member.guid} added!`));
}

var setProfile = function setProfile(profile){
	profileRef.child(profile.guid).set(profile).then( console.log(`Profile #${profile.guid} added!`) );
}

var build = function build(memberCount){
	var count = memberCount,
		member,
		profiles;

	while(memberCount-- !== 0){
		member = buildMember();
		profiles = buildProfiles();
		addIndex(member, profiles);
		profiles.forEach(profile =>{
			setLocation(profile);
			setProfile(profile);
		});
		setMember(member);
	}
}

module.exports = {
	member: buildMember,
	profiles: buildProfiles,
	db: build	
};

