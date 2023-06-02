package com.spring.files.excel.helper;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.spring.files.excel.model.Tutorial;

public class ExcelHelper {
  public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  static String[] HEADERs = { "Associate_Id", "Associate_Name", "Project_Id", "Project_Desc" ,"Base_location","Location","Project_Manager_Name","Project_Manager_Id","GenC_2022","EDL_Name","Phone_Number"};
  static String SHEET = "Tutorials";

  public static boolean hasExcelFormat(MultipartFile file) {

    if (!TYPE.equals(file.getContentType())) {
      return false;
    }

    return true;
  }

  public static ByteArrayInputStream tutorialsToExcel(List<Tutorial> tutorials) {

    try (
    		Workbook workbook = new XSSFWorkbook();
    ByteArrayOutputStream out = new ByteArrayOutputStream();) {
      Sheet sheet = workbook.createSheet(SHEET);

      // Header
      Row headerRow = sheet.createRow(0);

      for (int col = 0; col < HEADERs.length; col++) {
        Cell cell = headerRow.createCell(col);
        cell.setCellValue(HEADERs[col]);
      }

      int rowIdx = 1;
      for (Tutorial tutorial : tutorials) {
        Row row = sheet.createRow(rowIdx++);

        row.createCell(0).setCellValue(tutorial.getAssociate_Id());
        row.createCell(1).setCellValue(tutorial.getAssociate_Name());
        row.createCell(2).setCellValue(tutorial.getProject_Id());
        row.createCell(3).setCellValue(tutorial.getProject_Desc());
        row.createCell(4).setCellValue(tutorial.getBase_location());
    //createCell(5).setCellValue(tutorial.getMonthly_RTO_Dates());
     // row.createCell(6).setCellValue(tutorial.getDaily_Attendance());
        row.createCell(7).setCellValue(tutorial.getLocation());
        row.createCell(8).setCellValue(tutorial.getProject_Manager_Name());
        row.createCell(9).setCellValue(tutorial.getProject_Manager_Id());
        row.createCell(10).setCellValue(tutorial.getGenC_2022());
        row.createCell(11).setCellValue(tutorial.getEDL_Name());
        row.createCell(12).setCellValue(tutorial.getPhone_Number());
      }

      workbook.write(out);
      return new ByteArrayInputStream(out.toByteArray());
    } catch (IOException e) {
      throw new RuntimeException("fail to import data to Excel file: " + e.getMessage());
    }
  }

  public static List<Tutorial> excelToTutorials(InputStream is) {
    try {
   //   Workbook workbook = new XSSFWorkbook(is);

    //  Sheet sheet = workbook.getSheet(SHEET);
      
      Workbook workbook = WorkbookFactory.create(is);
      Sheet sheet = workbook.getSheetAt(0);

      
      
      
      Iterator<Row> rows = sheet.iterator();

      List<Tutorial> tutorials = new ArrayList<Tutorial>();

      int rowNumber = 0;
      while (rows.hasNext()) {
        Row currentRow = rows.next();

        // skip header
        if (rowNumber == 0) {
          rowNumber++;
          continue;
        }

        Iterator<Cell> cellsInRow = currentRow.iterator();

        Tutorial tutorial = new Tutorial();

        int cellIdx = 0;
        while (cellsInRow.hasNext()) {
          Cell currentCell = cellsInRow.next();

          switch (cellIdx) {
          case 0:
            tutorial.setAssociate_Id((long) currentCell.getNumericCellValue());
     //     System.out.println("ii"+currentCell.getNumericCellValue());
            break;
            
          case 1:
    //  	  System.out.println("ii"+currentCell.getStringCellValue());
              tutorial.setAssociate_Name(currentCell.getStringCellValue());
              break;
           
          case 2:
              tutorial.setProject_Id((long) currentCell.getNumericCellValue());
   //         System.out.println("ii"+currentCell.getNumericCellValue());
              break;

          case 3:
              tutorial.setProject_Desc(currentCell.getStringCellValue());
   //         System.out.println("ii"+currentCell.getStringCellValue());
              break;

          case 4:
              tutorial.setBase_location(currentCell.getStringCellValue());
    //        System.out.println("ii"+currentCell.getStringCellValue());
              break;

        //case 5:
       //   tutorial.setMonthly_RTO_Dates( currentCell.getStringCellValue());
  
       //     System.out.println("ii"+currentCell.getStringCellValue());
    //        break;

   //     case 6:
    //        tutorial.setDaily_Attendance(currentCell.getStringCellValue());
     //    System.out.println("zzz"+currentCell.getStringCellValue());
        //    break;
          case 5:
              tutorial.setLocation(currentCell.getStringCellValue());
     //     System.out.println("ii"+currentCell.getStringCellValue());
              break;
          case 6:
              tutorial.setProject_Manager_Name(currentCell.getStringCellValue());
      //    System.out.println("ii"+currentCell.getStringCellValue());
              break;
          case 7:
              tutorial.setProject_Manager_Id((long) currentCell.getNumericCellValue());
     //     System.out.println("ii"+currentCell.getNumericCellValue());
              break;
          case 8:
              tutorial.setGenC_2022(currentCell.getStringCellValue());
     //     System.out.println("ii"+currentCell.getStringCellValue());
              break;

          case 9:
              tutorial.setEDL_Name(currentCell.getStringCellValue());
    //     System.out.println("ii"+currentCell.getStringCellValue());
              break;
          case 10:
              tutorial.setPhone_Number((long) currentCell.getNumericCellValue());
      //system.out.println("ii"+currentCell.getNumericCellValue());
              break;

              
  

          default:
            break;
          }

          cellIdx++;
        }

        tutorials.add(tutorial);
      }

      workbook.close();

      return tutorials;
    } catch (IOException e) {
      throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
    }
  }
}
