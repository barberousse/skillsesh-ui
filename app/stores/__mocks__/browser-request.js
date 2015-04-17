var request = jest.genMockFromModule('browser-request');

var json = `
{
    "city": "Boardman", 
    "country_code": "US", 
    "country_name": "United States", 
    "ip": "54.187.153.99", 
    "latitude": 45.84, 
    "longitude": -119.701, 
    "metro_code": 810, 
    "region_code": "OR", 
    "region_name": "Oregon", 
    "time_zone": "America/Los_Angeles", 
    "zip_code": "97818"
}
`

function mockRequest(url, cb){
    var err = null,
        res = {},
        body = json;
    
    cb(err, res, json);
}

module.exports = request.mockImplementation(mockRequest);