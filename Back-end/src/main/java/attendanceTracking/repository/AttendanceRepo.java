package com.attendanceTracking.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.attendanceTracking.model.Attendance;


public interface AttendanceRepo extends JpaRepository<Attendance, Integer> {

}
