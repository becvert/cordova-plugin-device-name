#import <Cordova/CDV.h>
#import "CDVDeviceName.h"

@interface CDVDeviceName () {}
@end

@implementation CDVDeviceName

- (void)get:(CDVInvokedUrlCommand*)command
{
    NSDictionary* deviceProperties = [self deviceProperties];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:deviceProperties];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (NSDictionary*)deviceProperties
{
    UIDevice* device = [UIDevice currentDevice];

    return @{
        @"name": [device name]
    };
}

@end
