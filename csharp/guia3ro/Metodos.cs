namespace GuiaTercero
{
	public static class Metodos
	{
		// 1
		public static int SumOdds(int[] arr)
		{
			int result = 0;
			foreach (int n in arr)
				if (n % 2 != 0) result += n;

			return result;
		}

		// 2
		public static int[] MultNumbers(int num, int[] arr)
		{
			List<int> result = [];

			foreach (int i in arr)
				if (i % num == 0) result.Add(i);

			return [.. result];
		}

		// 3
		public static int SumElements(int[] arr)
		{
			int result = 0;
			foreach (int n in arr)
				if (n % 3 == 0 || n % 5 == 0 && n > 10 && n < 150) result += n;

			return result;
		}

		// 4
		public static bool FindNumber(int num, int[] arr)
		{
			foreach (int n in arr) if (n == num) return true;
			return false;
		}

		// 5
		public static bool EvenSum(int[] arr)
		{
			return arr.Sum() % 2 == 0;
		}

		// 6
		public static bool MultSum(int num, int[] arr)
		{
			return arr.Sum() % num == 0;
		}
	}
}