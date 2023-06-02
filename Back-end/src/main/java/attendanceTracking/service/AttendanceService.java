package com.attendanceTracking.service;



import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendanceTracking.model.Attendance;
import com.attendanceTracking.repository.AttendanceRepo;

@Service
public class AttendanceService {
	
	@Autowired
	private AttendanceRepo repo;


	public Optional<Attendance> showAll(int id) { 
		  return repo.findById(id); 
		  }

	public List<Attendance> getAllAttendance(){
	return repo.findAll();
}
	public void addAttendance(Attendance AttendanceModel) {
		
		repo.save(AttendanceModel);
	}
	
	public void updateAttendance(Integer id, Attendance AttendanceModel) {
	
		Optional<Attendance> attendance = repo.findById(id);
        attendance.ifPresent(attend -> AttendanceModel.setAssociate_Id(attend.getAssociate_Id()));
        attendance.ifPresent(attend-> AttendanceModel.setAssociate_Name(attend.getAssociate_Name()));
        attendance.ifPresent(attend->AttendanceModel.setBase_Location(attend.getBase_Location()));
    //    attendance.ifPresent(attendance->AttendanceModel.setDaily_Attendance(a.getDaily_Attendance()));
        attendance.ifPresent(attend->AttendanceModel.setLocation(attend.getLocation()));
        attendance.ifPresent(attend->AttendanceModel.setProject_Desc(attend.getProject_Desc()));
        attendance.ifPresent(attend->AttendanceModel.setProject_Id(attend.getProject_Id()));
		/* Date date = new Date(); */
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/uuuu"); 
        LocalDate localDate = LocalDate.now();
        AttendanceModel.setAttendance_Date(dtf.format(localDate));
        repo.save(AttendanceModel);
	}
}

 
	
	
