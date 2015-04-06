# Routes
Routes are controller-views that render when the router calls for them

## `.container`
Every route must start by providing a `<div>` with class `.container`. No elements should be rendered outside of `.container` and at least one element must render as a child of `.container`. The exception is the `Home` page, which has to account for our jQuery-based side navigation.

## Router context
Routes declare the `contextTypes' method with a `router` property in order to enable access to router state, i.e. what page are we on?
