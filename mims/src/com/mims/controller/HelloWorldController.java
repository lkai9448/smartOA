package com.mims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloWorldController {
	
	@Autowired
	private User user;

	@RequestMapping("/hello")
	public ModelAndView helloworld(ModelAndView modelAndView) {
		System.out.println(user.getClass());
		System.out.println("Hello World!!!");
		modelAndView.getModel().put("test", "Hello World!!!");
		modelAndView.setViewName("hello");
		return modelAndView;
	}
}
