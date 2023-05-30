package com.attendanceTracking.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendanceTracking.model.AttendanceModel;

import com.attendanceTracking.repository.AttendanceRepo;

@Service
public class AttendanceService {
	
	@Autowired
	private AttendanceRepo repo;


	
	  public Optional<AttendanceModel> showAll(int id) { 
		  return repo.findById(id); 
		  }
	 
	  public void addAttendance(AttendanceModel AttendanceModel) {
		  repo.save(AttendanceModel);

	    }
}
