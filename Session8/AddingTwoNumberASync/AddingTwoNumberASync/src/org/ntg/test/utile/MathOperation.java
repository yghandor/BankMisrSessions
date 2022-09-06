package org.ntg.test.utile;

public class MathOperation implements Runnable {
  static int NumberOFRunningThread = 0;
  private int num1;
  private int num2;

  private int result;

  public MathOperation(int num1, int num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public MathOperation DoComplexMathOperationASync() {
    MathOperation.NumberOFRunningThread++;
    new Thread(this).start();
    return this;
  }

  private void Process() {
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      throw new RuntimeException(e);
    }
  }

  public void DisplayResults() {
    System.out.println("Num1 : " + num1 + " Plus Num2 : " + num2 + " Is " + result);
  }


  @Override
  public void run() {
    this.result = num1 + num2;
    this.Process();
    if(this.op != null){
      this.op.Notfay(this);
    }
    MathOperation.NumberOFRunningThread--;
  }

  OperationFinishNotfication op;

  public void then(OperationFinishNotfication in_op) {
    this.op = in_op;


  }
}
