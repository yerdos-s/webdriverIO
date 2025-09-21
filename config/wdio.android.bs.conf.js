import {config} from './wdio.shared.conf.js';
import path from "path";
import 'dotenv/config'


config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

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
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Samsung Galaxy S22 Ultra',
        'appium:automationName': 'UiAutomator2',
        'appium:app': "bs://b05e4010ac56d96f8a666e5c4d4e3b3633863fde",
        'appium:autoGrantPermissions': true,
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

export {config};
