package com.attendanceTracking.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.attendanceTracking.model.Attendance;
import com.attendanceTracking.service.AttendanceService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/attendance")
public class AttendanceController {
	
	@Autowired
	private AttendanceService service;
	
	@GetMapping("/{id}")
	public Optional<Attendance> getById(@PathVariable("id") Integer id){
		return service.showAll(id);
	}
	
	@PutMapping("/save/{id}")
	public void updateAttendance(@PathVariable Integer id, @RequestBody Attendance AttendanceModel ) {
		service.updateAttendance(id, AttendanceModel);
	}
	
}
