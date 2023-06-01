package com.fixedcode.attendance_tracking.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Attendance_Tracking")
public class Attendance {
	@Id
	private Integer Associate_Id;
	private String Associate_Name;
	private Integer Project_Id;
	private String Project_Desc;
	private String Base_Location;
	private String Monthly_RTO_Dates;
	private String Daily_Attendance;
	private String Location;
	
	public Integer getAssociate_Id() {
		return Associate_Id;
	}
	public void setAssociate_Id(Integer associate_Id) {
		Associate_Id = associate_Id;
	}
	public String getAssociate_Name() {
		return Associate_Name;
	}
	public void setAssociate_Name(String associate_Name) {
		Associate_Name = associate_Name;
	}
	public Integer getProject_Id() {
		return Project_Id;
	}
	public void setProject_Id(Integer project_Id) {
		Project_Id = project_Id;
	}
	public String getProject_Desc() {
		return Project_Desc;
	}
	public void setProject_Desc(String project_Desc) {
		Project_Desc = project_Desc;
	}
	public String getBase_Location() {
		return Base_Location;
	}
	public void setBase_Location(String base_Location) {
		Base_Location = base_Location;
	}
	public String getMonthly_RTO_Dates() {
		return Monthly_RTO_Dates;
	}
	public void setMonthly_RTO_Dates(String monthly_RTO_Dates) {
		Monthly_RTO_Dates = monthly_RTO_Dates;
	}
	public String getDaily_Attendance() {
		return Daily_Attendance;
	}
	public void setDaily_Attendance(String daily_Attendance) {
		Daily_Attendance = daily_Attendance;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	
	public Attendance(Integer associate_Id, String associate_Name, Integer project_Id, String project_Desc,
			String base_Location, String monthly_RTO_Dates, String daily_Attendance, String location) {
		super();
		Associate_Id = associate_Id;
		Associate_Name = associate_Name;
		Project_Id = project_Id;
		Project_Desc = project_Desc;
		Base_Location = base_Location;
		Monthly_RTO_Dates = monthly_RTO_Dates;
		Daily_Attendance = daily_Attendance;
		Location = location;
	}
	
	public Attendance() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
