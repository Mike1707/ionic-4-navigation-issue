# Ionic 4 Demo Project for Navigation Issues

This project shows the navigation issues with ionic 4, segments and a tab-layout.

## Issue descriptions

1) The segment1 route should be appended initially but needs a page refresh to be appended.
The route should be `http://localhost:8100/tabs/tab1/segment1` initially after starting.
2) The segment buttons in the first tab should trigger url changes which load the components in the `<router-outlet>` 
but they stop working after one click.

## Usage

```
$> npm i
$> ionic serve
```
