#! /usr/bin/env bash

php artisan serv & npm run dev & php artisan websocket:serve & php artisan queue:work

