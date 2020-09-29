package com.nuri.ewsn.web.cont;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class ViewController {

    @GetMapping("/hello")
    public String hello(Model model) {
        return "hello";
    }

    @GetMapping("/dashboard")
    public String test(Model model) {
        log.info("/dashboard");
        return "dashboard";
    }

    @GetMapping("/monitoring/devices")
    public String monitoringDevices(Model model) {
        log.info("/monitoring/devices");
        return "monitoring/devices";
    }

    @GetMapping("/monitoring/location")
    public String monitoringLocation(Model model) {
        log.info("/monitoring/location");
        return "monitoring/location";
    }

    @GetMapping("/monitoring/communication")
    public String monitoringCommunication(Model model) {
        log.info("/monitoring/communication");
        return "monitoring/communication";
    }

    @GetMapping("/monitoring/event")
    public String monitoringEvent(Model model) {
        log.info("/monitoring/event");
        return "monitoring/event";
    }

    @GetMapping("/devices/info")
    public String devicesInfo(Model model) {
        log.info("/devices/info");
        return "devices/info";
    }

    @GetMapping("/devices/resource")
    public String devicesResource(Model model) {
        log.info("/devices/resource");
        return "devices/resource";
    }

    @GetMapping("/devices/authentication")
    public String devicesAuthen(Model model) {
        log.info("/devices/authentication");
        return "devices/authentication";
    }

    @GetMapping("/notice")
    public String systemNotice(Model model) {
        log.info("/notice");
        return "notice";
    }
    @GetMapping("/system/vendor")
    public String systemVendor(Model model) {
        log.info("/system/vendor");
        return "system/vendor";
    }

    @GetMapping("/system/code")
    public String systemCode(Model model) {
        log.info("/system/code");
        return "system/code";
    }

    @GetMapping("/system/user")
    public String systemUser(Model model) {
        log.info("/system/user");
        return "system/user";
    }






}
