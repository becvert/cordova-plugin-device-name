/*
 * Cordova Device Name Plugin
 *
 * Device Name plugin for Cordova/Phonegap 
 * by Sylvain Brejeon
 */

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
    NSMutableDictionary* devProps = [NSMutableDictionary dictionaryWithCapacity:4];

    [devProps setObject:[device name] forKey:@"name"];
    NSDictionary* devReturn = [NSDictionary dictionaryWithDictionary:devProps];
    return devReturn;
}

@end
