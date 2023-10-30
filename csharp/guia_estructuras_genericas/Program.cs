using System.Collections;
using System.Reflection.Metadata;

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

			// Console.Write("5: OrdenarCola() -> ");
			Console.WriteLine(string.Join(", ", OrdenarCola(new Queue<int>([3, 1, 2, 0]), 1)));
		}

		static List<int> InvertirLista(List<int> list)
		{
			Stack<int> stack = new(list);

			return new List<int>(stack);
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

		static Queue<int> OrdenarCola(Queue<int> cola, sbyte orden)
		{
			Queue<int> resultado = [];
			resultado.Enqueue(cola.Dequeue());
			if (orden == 1)
			{
				for (int i = cola.Count; i > 0; i--)
				{
					Console.WriteLine("r: " + string.Join(", ", resultado));
					Console.WriteLine("c: " + string.Join(", ", cola));

					if (cola.Peek() < resultado.Peek())
						resultado.Enqueue(cola.Dequeue());
					else
					{
						int temp = resultado.Dequeue();
						resultado.Enqueue(cola.Dequeue());
						resultado.Enqueue(temp);
					}
				}
			}

			else if (orden == -1)
			{
				for (int i = cola.Count; i > 0; i--)
				{
					if (cola.Peek() > resultado.Peek())
						resultado.Enqueue(cola.Dequeue());
					else
					{
						int temp = resultado.Dequeue();
						resultado.Enqueue(cola.Dequeue());
						resultado.Enqueue(temp);
					}
				}
			}

			return resultado;
		}
	}
}