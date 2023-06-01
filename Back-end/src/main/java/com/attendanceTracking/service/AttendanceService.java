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

	
	
	
	
	
	
	
package com.fixedcode.attendance_tracking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fixedcode.attendance_tracking.model.Attendance;
import com.fixedcode.attendance_tracking.repository.DemoRepository;

@Service
public class DemoServvice {
	@Autowired
	private DemoRepository DemoRepo;
	public List<Attendance> getAllAttendance(){
	return DemoRepo.findAll();
}
	public void addAttendance(Attendance Attendance) {
		
		DemoRepo.save(Attendance);
		
	}
	public void updateAttendance(Integer id, Attendance Attendance) {
		Attendance existingupdateAttendance = DemoRepo.findById(id).orElse(null);
		/*existingupdateAttendance.setDaily_Attendance(existingupdateAttendance.getDaily_Attendance());
		existingupdateAttendance.setMonthly_RTO_Dates(existingupdateAttendance.getMonthly_RTO_Dates());
		*/// TODO Auto-generated method stub
		DemoRepo.save(Attendance);
	}
	
}
