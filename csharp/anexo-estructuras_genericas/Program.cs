using System.ComponentModel.DataAnnotations;
using System.Data;

namespace AnexoEstructurasGenericas
{
	class Program
	{
		struct Player
		{
			public int fuerza { get; }
			private int destreza { get; }
			private int constitucion { get; }
			private int inteligencia { get; }
			private int sabiduria { get; }
			private int carisma { get; }

			public Player()
			{
				fuerza = TirarDados();
				destreza = TirarDados();
				constitucion = TirarDados();
				inteligencia = TirarDados();
				sabiduria = TirarDados();
				carisma = TirarDados();
			}

			readonly int TirarDados()
			{
				Random rnd = new();

				int[] dados =
				[
					rnd.Next(1, 7),
					rnd.Next(1, 7),
					rnd.Next(1, 7),
					rnd.Next(1, 7),
				];

				Index menor = 0;

				for (int i = 1, length = dados.Length; i < length; i++)
					if (dados[i] < dados[menor]) menor = i;

				dados[menor] = 0;

				return dados[0] + dados[1] + dados[2] + dados[3];
			}
		}

		static void Main()
		{
			// Console.WriteLine(Atbash("gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt"));
			// Console.WriteLine(CambiarBase(42, 10));
			// Console.WriteLine(SeriesProduct("1027839564", 3));

			Player p1 = new Player();
			Console.WriteLine(p1.fuerza);
		}

		static int SeriesProduct(string str, int n)
		{
			Stack<int> pila = [];
			int max = int.MinValue;

			for (int i = 0, length = str.Length - n; i < length; i++)
			{
				for (int j = 0; j < n; j++)
					pila.Push(int.Parse(str[i + j].ToString()));

				int thisMax = pila.Pop() * pila.Pop() * pila.Pop();
				if (thisMax > max) max = thisMax;
			}

			return max;
		}

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