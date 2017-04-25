#import <Cordova/CDV.h>
#import "CDVDeviceName.h"

@interface CDVDeviceName () {}
@end

@implementation CDVDeviceName

- (void)get:(CDVInvokedUrlCommand*)command
{
    UIDevice* device = [UIDevice currentDevice];

    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:[device name]];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
