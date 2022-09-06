package org.ntg.test.utile;

public class application {

  public application() {

    long startTime = System.currentTimeMillis();

//    OperationFinishNotfication op = new OperationFinishNotfication() {
//      @Override
//      public void Notfay(MathOperation op) {
//        op.DisplayResults();
//      }
//    };

    //OperationFinishNotfication op = MthOp ->  MthOp.DisplayResults() ;


    //processing
    new MathOperation(7,5).DoComplexMathOperationASync().then(MthOp ->  MthOp.DisplayResults());
    new MathOperation(7,4).DoComplexMathOperationASync().then(MthOp ->  MthOp.DisplayResults());
    new MathOperation(7,2).DoComplexMathOperationASync().then(MthOp ->  MthOp.DisplayResults());
    new MathOperation(7,8).DoComplexMathOperationASync().then(MthOp ->  MthOp.DisplayResults());
    new MathOperation(7,9).DoComplexMathOperationASync().then(MthOp ->  MthOp.DisplayResults());
    new MathOperation(7,0).DoComplexMathOperationASync().then(MthOp ->  MthOp.DisplayResults());

    //awating
    while(MathOperation.NumberOFRunningThread > 0){
      try {
        Thread.sleep(100);
      } catch (InterruptedException e) {
        throw new RuntimeException(e);
      }
    }
    long EndTime = System.currentTimeMillis();
    long Diff = EndTime - startTime;
    System.out.println("Total Operation Time Takes : " + Diff + " MSec");

  }




  public static void main(String[] arg) {
    System.out.println("*******************Start***************");
    new application();
    System.out.println("*******************End***************");

  }

}
