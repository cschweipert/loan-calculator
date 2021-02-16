it('should calculate the monthly rate correctly', function () {
  expect(calcMonthlyPayment(10000, 8, 5.8)).toEqual(130.44263011109317)
});

it("should handle terribly high interest rates", function () {
  expect(calcMonthlyPayment(1000, 40, 99)).toEqual(82.5);
});

