namespace GuiaTercero
{
	class Program
	{
		static void Main()
		{
			Console.WriteLine($"SumOdds([1,2,3]) -> {Metodos.SumOdds([1, 2, 3])}");
			Console.WriteLine(
				$"MultNumbers(2, [1,2,4]) -> [{string.Join(", ", Metodos.MultNumbers(2, [1, 2, 4]))}]");
			Console.WriteLine($"SumElements([5,104,20]) -> {Metodos.SumElements([5, 104, 20])}");
			Console.WriteLine($"FindNumber(3, [1,2,3]) -> {Metodos.FindNumber(3, [1, 2, 3])}");
			Console.WriteLine($"EvenSum([1,2,3]) -> {Metodos.EvenSum([1, 2, 4])}");
			Console.WriteLine($"MultSum(3, [1,2,3]) -> {Metodos.MultSum(3, [1, 2, 3])}");
		}
	}
}