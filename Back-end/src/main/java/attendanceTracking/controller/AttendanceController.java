package com.fixedcode.attendance_tracking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fixedcode.attendance_tracking.model.Attendance;
import com.fixedcode.attendance_tracking.service.DemoServvice;

@RestController
public class DemoController {
	@Autowired
	private DemoServvice DemoServ;
	@GetMapping("/SHOW")
	public List<Attendance> getAllAttendance(){
		return DemoServ.getAllAttendance();
	}	
	
	
	
	@PutMapping("/SAVE/{id}")
	public void updateAttendance(@PathVariable Integer id, @RequestBody Attendance Attendance ) {
		DemoServ.updateAttendance(id, Attendance);

}
	
}

