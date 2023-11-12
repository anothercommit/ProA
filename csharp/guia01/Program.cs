using System.Collections;

namespace Guia01
{
	class Program
	{
		static void Main()
		{
			Console.WriteLine(AlterWords("Joaco Dome Nech"));
			Console.WriteLine(InverseWords("hola"));
			Console.WriteLine(CheckEnd("hola", "la"));
			Console.WriteLine(
				string.Join(", ", EliminateOdds([3, 4, 7, 9, 4, 11, 32]))
			);
			Console.WriteLine(RepeatLetters("casa"));

			ArrayList listaArray = [];
			listaArray.Add("casa");
			listaArray.Add("bicicleta");
			listaArray.Add(2);
			listaArray.Add(4);
			listaArray.Add("-21");
			listaArray.Add(-32);
			Console.WriteLine(string.Join(", ", OnlyNumbers(listaArray)));

			Console.WriteLine(string.Join(", ", HighestAndLowest([2, 3, -12, -9, 232, 1])));
			Console.WriteLine(string.Join(", ", RemoveDuplicates(
				["casa", "perro", "gato", "gato", "dinosaurio", "perro", "gato"]
			)));
			Console.WriteLine(ToBinary(20));
			Console.WriteLine(SumTwoSmall([1, 2, 3, 4]));
			Console.WriteLine(string.Join(", ", CapitalIndexes("Hola Pablo")));
		}

		static int[] CapitalIndexes(string str)
		{
			Queue<int> indexes = [];

			for (int i = 0, lenght = str.Length; i < lenght; i++)
				if (char.IsUpper(str[i]))
					indexes.Enqueue(i);

			return [.. indexes];
		}

		static int SumTwoSmall(int[] arr)
		{
			int smallest = int.MaxValue;
			int secondSmallest = int.MaxValue;

			foreach (int i in arr)
			{
				if (i < smallest)
					(secondSmallest, smallest) = (smallest, i);
				else if (i < secondSmallest)
					secondSmallest = i;
			}

			return smallest + secondSmallest;
		}

		static string ToBinary(int num)
		{
			Stack<byte> binario = [];

			while (num > 0)
			{
				binario.Push((byte)(num % 2));
				num /= 2;
			}

			return string.Join("", binario);
		}

		static string[] RemoveDuplicates(string[] arr)
		{
			List<string> result = new(arr);

			for (int i = 0; i < result.Count; i++)
			{
				for (int j = i + 1; j < result.Count; j++)
				{
					if (result[j] == result[i]) result.RemoveAt(j);
				}
			}

			return [.. result];
		}

		static int[] HighestAndLowest(int[] arr)
		{
			int[] highestAndLowest = [int.MinValue, int.MaxValue];

			foreach (int i in arr)
			{
				if (i > highestAndLowest[0]) highestAndLowest[0] = i;
				if (i < highestAndLowest[1]) highestAndLowest[1] = i;
			}

			return highestAndLowest;
		}

		static int[] OnlyNumbers(ArrayList arrList)
		{
			Queue<int> result = [];

			for (int i = 0, count = arrList.Count; i < count; i++)
			{
				if (arrList[i] is int v)
					result.Enqueue(v);
			}

			return [.. result];
		}

		static string RepeatLetters(string str)
		{
			string result = "";
			foreach (char c in str)
				result += $"{c}{c}";
			return result;
		}

		static int[] EliminateOdds(int[] arr)
		{
			Queue<int> result = [];
			foreach (int i in arr) if (i % 2 == 0) result.Enqueue(i);
			return [.. result];
		}

		static bool CheckEnd(string str1, string str2)
		{
			if (str2.Length > str1.Length) return false;

			for (int i = 1, count = str2.Length; i <= count; i++)
				if (str1[^i] != str2[^i]) return false;

			return true;
		}

		static string InverseWords(string str)
		{
			Stack<char> reversedStr = new(str);
			string result = "";
			foreach (char c in reversedStr) result += c;
			return result;
		}

		static string AlterWords(string str)
		{
			string alteredWords = "";
			int lastSpace = str.Length;

			for (int i = str.Length - 1; i >= 0; i--)
			{
				if (str[i] == ' ')
				{
					alteredWords += str[(i + 1)..lastSpace] + " ";
					lastSpace = i;
				}
			}

			if (lastSpace != 0) alteredWords += str[0..lastSpace];

			return alteredWords;
		}
	}
}