import path from 'path';
import { config } from './wdio.shared.conf.js';

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
  path.join(process.cwd(), './test/specs/ios/**.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'ios',
        'appium:platformVersion': '18.6',
        'appium:deviceName': 'iPhone 16',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo 2.app'),
        // 'appium:autoGrantPermissions': true,
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

export { config };
