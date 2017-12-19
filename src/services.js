/* global gapi */
/**
 */
export const gamesGetAll = (callback) => {
    gapi.client.services.games
        .getAll()
        .execute((resp) => {
            callback(resp);
        });
};


/**
 */
export const gamesAdd = (params, callback) => {
    gapi.client.services.games
        .add(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const gamesDelete = (gameId, callback) => {
    gapi.client.services.games
        .delete({
            'gameId' : gameId
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const gamesUpdate = (gameId, params, callback) => {
    params.id = gameId;
    gapi.client.services.games
        .update(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const entitlementsAdd = (params, callback) => {
    gapi.client.services.entitlements
        .add(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const entitlementsDelete = (gameId, entitlementId, callback) => {
    gapi.client.services.entitlements
        .delete({
            'gameId' : gameId,
            'entitlementId' : entitlementId
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const entitlementsUpdate = (gameId, entitlementId, params, callback) => {
    params.gameId = gameId;
    params.entitlementId = entitlementId;

    gapi.client.services.entitlements
        .update(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const currenciesAdd = (params, callback) => {
    gapi.client.services.currencies
        .add(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const currenciesDelete = (gameId, currencyId, callback) => {
    gapi.client.services.currencies
        .delete(
        {
            'gameId' : gameId,
            'currencyId' : currencyId
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const currenciesUpdate = (gameId, currencyId, params, callback) => {
    params.gameId = gameId;
    params.currencyId = currencyId;

    gapi.client.services.currencies
        .update(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const storeProductsAdd = (params, callback) => {
    gapi.client.services.store.products
        .add(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const storeProductsDelete= (productId, callback) => {
    gapi.client.services.store.products
        .delete(
        {
            'productId' : productId
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const storeProductsUpdate = (productId, params, callback) => {
    params.id = productId;

    gapi.client.services.store.products
        .update(params)
        .execute((resp) => {
            callback(resp);
        });
};


/**
 */
export const eventsAdd = (params, callback) => {
    gapi.client.services.events
        .add(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const eventsDelete = (gameId, eventId, callback) => {
    gapi.client.services.events
        .delete(
        {
            'gameId' : gameId,
            'eventId' : eventId
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const eventsUpdate = (gameId, eventId, params, callback) => {
    params.gameId = gameId;
    params.eventId = eventId;

    gapi.client.services.events
        .update(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const eventsPause = (gameId, eventId, callback) => {
    gapi.client.services.events
        .pause(
        {
            'gameId' : gameId,
            'eventId' : eventId
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const eventsRun = (gameId, eventId, callback) => {
    gapi.client.services.events
        .run(
        {
            'gameId' : gameId,
            'eventId' : eventId
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const eventsPublish = (gameId, eventId, publish, callback) => {
    gapi.client.services.events
        .publish(
        {
            'gameId' : gameId,
            'eventId' : eventId,
            'publish' : publish
        })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const buildsDelete = (params, callback) => {
    gapi.client.services.builds
        .delete(params)
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const buildsPin = (gameId, buildId, callback) => {
    gapi.client.services.builds
        .pin(
            {
                'gameId' : gameId,
                'buildId' : buildId
            })
        .execute((resp) => {
            callback(resp);
        });
};

/**
 */
export const buildsEdit = (gameId, buildId, notes, callback) => {
    gapi.client.services.builds
        .edit(
            {
                'gameId' : gameId,
                'buildId' : buildId,
                'notes' : notes
            })
        .execute((resp) => {
            callback(resp);
        });
};