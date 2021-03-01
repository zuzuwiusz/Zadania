package a;

import java.util.Scanner;

public class Zad1liczonko {

	public static void main(String[] args) {
		System.out.println("Podaj pierwsz¹ liczbê:");
	
		String no1;
		
		Scanner zuz = new Scanner (System.in);
		int n1 = zuz.nextInt();
		no1 = zuz.nextLine(); 
		
		System.out.println("Podaj drug¹ liczbê:");
		int n2 = zuz.nextInt();
		
		String no2 = zuz.nextLine(); 
		
		
		int suma = n1 + n2;
		int roznica = n1 - n2;
		int iloczyn = n1 * n2;
		int dziel = n1 /n2;
		
	
		
		System.out.println("Suma tych liczb wynosi " + suma +". Ró¿nica tych liczb wynosi "+ roznica +". "
				+ "Iloczyn tych liczb wynosi " + iloczyn +". Liczba dzielenia wynosi " + dziel +".");
		
	
		
		// TODO Auto-generated method stub

	}

}
