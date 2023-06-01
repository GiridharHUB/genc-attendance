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
	public void updateAttendance(Integer id, AttendanceModel AttendanceModel) {
		repo.save(AttendanceModel);
}
	public List<AttendanceModel> getAllAttendance(){
	return repo.findAll();
}
	public void addAttendance(AttendanceModel AttendanceModel) {
		
		repo.save(AttendanceModel);
		
	}
	public void updateAttendance(Integer id, AttendanceModel AttendanceModel) {
		AttendanceModel existingupdateAttendanceModel = repo.findById(id).orElse(null);
		/*existingupdateAttendance.setDaily_Attendance(existingupdateAttendance.getDaily_Attendance());
		existingupdateAttendance.setMonthly_RTO_Dates(existingupdateAttendance.getMonthly_RTO_Dates());
		*/// TODO Auto-generated method stub
		repo.save(AttendanceModel);
	}
}

	
	
