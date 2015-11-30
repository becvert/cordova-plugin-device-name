/*
 * Cordova Device Name Plugin
 *
 * Device Name plugin for Cordova/Phonegap 
 * by Sylvain Brejeon
 */

#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>

@interface CDVDeviceName : CDVPlugin
{}

- (void)get:(CDVInvokedUrlCommand*)command;

@end
