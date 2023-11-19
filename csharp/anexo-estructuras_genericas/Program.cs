using System.Data;

namespace AnexoEstructurasGenericas
{
	class Program
	{
		static void Main()
		{
			// Console.WriteLine(Atbash("gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt"));
			// Console.WriteLine(CambiarBase(42, 10));
		}

		// static string SeriesProduct(string str, int n)
		// {
		// 	Stack<int> pila = [];

		// 	foreach (char c in str)
		// 		pila.Push(int.Parse(c.ToString()));

		// }

		static string CambiarBase(int n, int b)
		{
			string strN = n.ToString();
			string result = "";

			for (int i = strN.Length - 1; i >= 0; i--)
				result += $"[ {strN[^(i + 1)]} . {b}^{i} ] ";

			return result;
		}

		static string Atbash(string str)
		{
			str = str.ToLower();
			string result = "";

			foreach (char c in str)
				if (c != ' ') result += (char)('a' + ('z' - c));

			return result;
		}
	}
}