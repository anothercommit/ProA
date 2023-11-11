using System.Reflection.Metadata;

namespace Guia01
{
	class Program
	{
		static void Main()
		{
			// Console.WriteLine(AlterWords("Joaco Dome Nech"));
			// Console.WriteLine(InverseWords("hola"));
			// Console.WriteLine(CheckEnd("hola", "la"));
			// Console.WriteLine(
			// 	string.Join(", ", EliminateOdds([3, 4, 7, 9, 4, 11, 32]))
			// );
			Console.WriteLine(
				string.Join(", ", EliminateOdds([3, 4, 7, 9, 4, 11, 32]))
			);
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