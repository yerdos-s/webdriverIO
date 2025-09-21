import path from 'path';
import {config} from './wdio.shared.conf.js';

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    path.join(process.cwd(), './test/specs/android/**.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'Pixel 9',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true,
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

export { config };
