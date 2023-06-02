package com.spring.files.excel.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Attendance_Tracking")
public class Tutorial {

  @Id
  @Column(name = "Associate_Id")
  private long Associate_Id ;

  @Column(name = "Associate_Name")
  private String Associate_Name;
  
  @Column(name = "Project_Id")
  private long Project_Id;
  
  @Column(name = "Project_Desc")
  private String Project_Desc;
  
  @Column(name = "Base_location")
  private String Base_location;
  
 
  @Column(name = "Location")
  private String Location;
  
  @Column(name = "Project_Manager_Name")
  private String Project_Manager_Name;
  
  @Column(name = "Project_Manager_Id")
  private long Project_Manager_Id;
  
  @Column(name = "GenC_2022")
  private String GenC_2022;

  @Column(name = "EDL_Name")
  private String EDL_Name;
  
  @Column(name = "Phone_Number")
  private long Phone_Number;

  public Tutorial() {

  }

  public Tutorial(long Associate_Id, String Associate_Name, long Project_Id, String Project_Desc, String Base_location, String Location, String Project_Manager_Name, long Project_Manager_Id, String GenC_2022, String EDL_Name, long Phone_Number) {
  this.Associate_Id = Associate_Id;
    this.Associate_Name = Associate_Name;
    this.Project_Id = Project_Id;
    this.Project_Desc = Project_Desc;
    this.Base_location = Base_location;
  //  this.Monthly_RTO_Dates = Monthly_RTO_Dates;
    this.Location = Location;
    this.Project_Manager_Name = Project_Manager_Name;
    this.Project_Manager_Id = Project_Manager_Id;
    this.GenC_2022 = GenC_2022;
    this.EDL_Name = EDL_Name;
    this.Phone_Number = Phone_Number;
  }

  public long getAssociate_Id() {
    return Associate_Id;
  }

  public void setAssociate_Id(long Associate_Id) {
    this.Associate_Id = Associate_Id;
  }

  
  public String getAssociate_Name() {
	    return Associate_Name;
	  }

	  public void setAssociate_Name(String Associate_Name) {
	    this.Associate_Name = Associate_Name;
	  }

  
	  public long getProject_Id() {
		    return Project_Id;
		  }

		  public void setProject_Id(long Project_Id) {
		    this.Project_Id = Project_Id;
		  }

		  
		  
		  public String getProject_Desc() {
			    return Project_Desc;
			  }

			  public void setProject_Desc(String Project_Desc) {
			    this.Project_Desc = Project_Desc;
			  }

  
			  public String getBase_location() {
				    return Base_location;
				  }

				  public void setBase_location(String Base_location) {
				    this.Base_location = Base_location;
				  }
              
				  
			//	  public String getMonthly_RTO_Dates() {
		// Monthly_RTO_Dates;
		//		  }
		//		  public void setMonthly_RTO_Dates(String Monthly_RTO_Dates) {
		//			  this.Monthly_RTO_Dates = Monthly_RTO_Dates;
		//		  }
				  
				  
		//		  public String getDaily_Attendance() {
		// Daily_Attendance;
			//		  }

	//				  public void setDaily_Attendance(String Daily_Attendance) {
	//.Daily_Attendance = Daily_Attendance;
		//			  }

					  public String getLocation() {
						    return Location;
						  }

						  public void setLocation(String Location) {
						    this.Location = Location;
						  }

						  
						  public String getProject_Manager_Name() {
							    return Project_Manager_Name;
							  }

							  public void setProject_Manager_Name(String Project_Manager_Name) {
							    this.Project_Manager_Name = Project_Manager_Name;
							  }

						
							  public long getProject_Manager_Id() {
								    return Project_Manager_Id;
								  }

								  public void setProject_Manager_Id(long Project_Manager_Id) {
								    this.Project_Manager_Id = Project_Manager_Id;
								  }
  
 
  
  
  
  public String getGenC_2022() {
    return GenC_2022;
  }

  public void setGenC_2022(String GenC_2022) {
    this.GenC_2022 = GenC_2022;
  }

  public String getEDL_Name() {
    return EDL_Name;
  }

  public void setEDL_Name(String EDL_Name) {
    this.EDL_Name = EDL_Name;
  }

  public long getPhone_Number() {
    return Phone_Number;
  }

  public void setPhone_Number(long Phone_Number) {
    this.Phone_Number = Phone_Number;
  }

  @Override
  public String toString() {
    return "Tutorial [Associate_Id=" + Associate_Id + ", Associate_Name=" + Associate_Name + ", Project_Id=" + Project_Id + ", Project_Desc=" + Project_Desc + ", Base_location=" + Base_location +  ", Location=" + Location + ", Project_Manager_Name=" + Project_Manager_Name + ", Project_Manager_Id=" + Project_Manager_Id + ", GenC_2022=" + GenC_2022 + ", EDL_Name=" + EDL_Name + ", Phone_Number=" + Phone_Number + "]";
  }


}



 



