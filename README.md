# TTCSCN
tam nam bat phu, tam nu bat tai
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package LoginTCP;

import java.sql.Connection;
import java.sql.DriverManager ;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author lamnn8
 */
public class DBConnection {
    Connection connection ;
    String url = "jdbc:postgresql://localhost:5432/mydb1" ;
    String user = "postgresql" ;
    String password = "postgresql";
    public Connection dbConection(){
        try{
            Class.forName("org.postgresql.Driver") ;
        }catch(ClassNotFoundException e){
            e.getMessage();
        }
         try {    
             DriverManager.getConnection(url,user,password);
             JOptionPane.showMessageDialog(null,"connected");
        } catch (SQLException ex) {
            Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
             JOptionPane.showMessageDialog(null,"connected");
        }
           return connection;
    }
    public static void main(String[] args) {
        DBConnection db  = new DBConnection();
        db.dbConection();
        
        
    }
}
