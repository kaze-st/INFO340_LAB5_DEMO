'use strict'

import * as fs from 'fs';

const htmlContent = fs.readFileSync('./index.html', 'utf-8');

// Setup before the tests

let $;

beforeAll(
    function () {
        document.documentElement.innerHTML = htmlContent;

        $ = require('jquery');
        window.$ = $;
        require('./js/index.js')
    }
)

describe("Button functionality", function(){
    it('should exist', function(){
        expect($('.button-alert').length).toBe(1);
    })

    it('should work', function(){
        $('.button-alert').click()
        expect($('div').hasClass('scratch')).toBe(true);
        $('.button-alert').click()
        expect($('div').hasClass('scratch')).not.toBe(true);

    })
})