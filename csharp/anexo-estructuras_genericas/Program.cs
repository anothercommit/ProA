namespace AnexoEstructurasGenericas
{
	class Program
	{
		struct Player
		{
			public int Fuerza { get; }
			private int Destreza { get; }
			private int Constitucion { get; }
			private int Inteligencia { get; }
			private int Sabiduria { get; }
			private int Carisma { get; }

			public Player()
			{
				Fuerza = TirarDados();
				Destreza = TirarDados();
				Constitucion = TirarDados();
				Inteligencia = TirarDados();
				Sabiduria = TirarDados();
				Carisma = TirarDados();
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
			Console.WriteLine(Atbash("gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt"));
			Console.WriteLine(CambiarBase(42, 10));
			Console.WriteLine(SeriesProduct("1027839564", 3));

			Player[] players = GameMaker(2);

			Console.WriteLine("Fuerza p1: " + players[0].Fuerza);
			Console.WriteLine("Fuerza p2: " + players[1].Fuerza);
		}

		static Player[] GameMaker(int pAmount)
		{
			List<Player> players = [];

			for (int i = 0; i < pAmount; i++)
				players.Add(new Player());

			return [.. players];
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