"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'Default Country.') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi', 'pakistan');
describe_city('tokya', 'japan');
describe_city('paris');
