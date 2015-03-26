var msg = 'Dispatched!',
    dispatchHandler = function UserStoreHandler(payload){
        if (payload.actionType === 'console-log'){
            console.log(msg);
        }
    };
    
module.exports = dispatchHandler;