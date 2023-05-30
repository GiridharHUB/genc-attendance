package com.attendanceTracking.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.attendanceTracking.model.AttendanceModel;


public interface AttendanceRepo extends JpaRepository<AttendanceModel, Integer> {
	
}
