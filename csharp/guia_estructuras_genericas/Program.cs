using System.Collections;
using System.Reflection.Metadata;

namespace ColeccionesGenericas
{
	class Program
	{
		static void Main()
		{
			// Console.Write("1 -> ");
			// Console.WriteLine(string.Join(", ", InvertirLista([1, 2, 3, 4])));

			// Console.Write("2 -> ");
			// Console.WriteLine("\n" + string.Join(", ", FiltrarCola()));
		}

		static bool EsPalindrome()
		{
			string str = Console.ReadLine().ToLower();

			Stack<char> original = new(str);
			Stack<char> invertida = new(original);

			return original == invertida;
		}

		static int[] FiltrarCola()
		{
			Console.Write("Ingrese la cantidad de elementos: ");

			int cantidad = int.Parse(Console.ReadLine());

			Stack<int> stack = [];

			Console.WriteLine($"Ingrese {cantidad} números:");

			while (cantidad > 0)
			{
				string input = Console.ReadLine();

				if (int.TryParse(input, out int num))
				{
					stack.Push(num);
					cantidad--;
				}
				else
					Console.WriteLine("¡Error! Por favor ingrese un int");
			}

			List<int> result = [];

			foreach (int i in stack)
				if (i % 2 == 0) result.Insert(0, i);

			return [.. result];
		}

		static List<int> InvertirLista(List<int> list)
		{
			Stack<int> stack = new(list);

			return new List<int>(stack);
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
	}
}