﻿using System.Collections;
using Microsoft.VisualBasic;

namespace ColeccionesGenericas
{
	class Program
	{
		static void Main()
		{
			// Console.Write("1: InvertirLista() -> ");
			// Console.WriteLine(string.Join(", ", InvertirLista([1, 2, 3, 4])));

			// Console.Write("2: EvaluarRpn() -> ");
			// Console.WriteLine(EvaluarRpn("5 3 4 * + 7 -"));

			// Console.Write("3: FiltrarCola() -> ");
			// Console.WriteLine("\n" + string.Join(", ", FiltrarCola()));

			// Console.Write("4: EsPalindrome() -> ");
			// Console.WriteLine(EsPalindrome());

			// Console.Write("5: OrdenarCola() -> ¿Por qué con colas?");

			// Console.Write("6: BusquedaBinaria() -> ");
			// Console.WriteLine(BusquedaBinaria([0, 1, 2, 3], 3));

			// Console.Write("7: BusquedaLineal() -> ");
			// Console.WriteLine(BusquedaLineal([0, 1, 2, 3], 3));

			Console.Write("8: SelectionSort() -> ");
			ArrayList list = SelectionSort([0, 3, 1, 2]);
			foreach (int i in list) Console.Write(i);
		}

		static ArrayList SelectionSort(ArrayList list)
		{
			for (int i = 0, count = list.Count; i < count; i++)
			{
				int min = i;
				for (int j = i + 1; j < count; j++)
					if ((int)list[j] < (int)list[min]) min = j;
				(list[i], list[min]) = (list[min], list[i]);
			}

			return list;
		}

		static int BusquedaLineal(ArrayList list, int num)
		{
			for (int i = 0, count = list.Count; i < count; i++)
				if ((int)list[i] == num) return i;

			return -1;
		}

		static int BusquedaBinaria(ArrayList list, int num)
		{
			if (list.Count == 0) return -1;
			double left = 0.0;
			double right = list.Count;

			while (left <= right)
			{
				int index = Convert.ToInt32(Math.Floor((left + right) / 2));
				int medio = (int)list[index];

				if (num == medio) return index;
				else if (num > medio) left = medio + 1;
				else right = medio - 1;
			}

			return -1;
		}

		static bool EsPalindrome()
		{
			string str = Console.ReadLine().ToLower();

			Queue<char> original = new(str);
			Queue<char> invertida = new(str.ToArray().Reverse());

			for (int i = original.Count; i > 0; i--)
				if (original.Dequeue() != invertida.Dequeue())
					return false;

			return true;
		}

		static int[] FiltrarCola()
		{
			Queue<int> cola = [];
			int cantidad = int.Parse(Console.ReadLine());

			while (cantidad > 0)
			{
				string input = Console.ReadLine();

				if (int.TryParse(input, out int num))
				{
					cola.Enqueue(num);
					cantidad--;
				}
				else
					Console.WriteLine("¡Error! Por favor ingrese un int");
			}

			Queue<int> result = [];

			foreach (int i in cola)
				if (i % 2 == 0) result.Enqueue(i);

			return [.. result];
		}

		static double EvaluarRpn(string str)
		{
			ArrayList expresion = new(str.ToLower().Split(' '));
			Stack<double> stack = [];
			double result = 0;

			foreach (string item in expresion)
			{
				if (double.TryParse(item, out double element))
				{
					stack.Push(element);
				}
				else
				{
					result = HacerOperacion(item, result, stack);
				}
			}
			return result;
		}

		static double HacerOperacion(string op, double result, Stack<double> stack)
		{
			switch (op)
			{
				case "+":
					result += stack.Pop();
					break;
				case "-":
					result -= stack.Pop();
					break;
				case "*":
					if (stack.Count > 1)
						result += stack.Pop() * stack.Pop();
					else
						result *= stack.Pop();
					break;
				case "/":
					if (stack.Count > 1)
						result /= stack.Pop() * stack.Pop();
					else
						result /= stack.Pop();
					break;
				case "^":
					if (stack.Count > 1)
					{
						double temp = stack.Pop();
						result += Math.Pow(stack.Pop(), temp);
					}
					else
						result = Math.Pow(result, stack.Pop());
					break;
			}
			return result;
		}

		static List<int> InvertirLista(List<int> list)
		{
			Stack<int> stack = new(list);

			return new List<int>(stack);
		}
	}
}