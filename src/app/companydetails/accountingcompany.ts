export class AccountingCompany{
    constructor(

        public  CompanyId :number,
        public CompanyName :string ,
        public  CompanyRegno :string ,
        public  CompanyTelephone :string,
        public  CompanyEmail :string,
        public  FinancialYrStartDate :string,
        public  FinancialYrEndDate :string,
        public  CompanyLogo : string  ,    //byte[]
     //   public  SoftwareSerialNo :string,
        public  BilltoLine1 :string,
        public  BilltoLine2 :string,
        public  BilltoCity :string,
        public  BilltoState :string,
        public  BilltoCountry :string,
        public  BilltoPostalCode :string,
        public  ShiptoLine1 :string,
        public  ShiptoLine2 :string,
        public  ShiptoCity :string,
        public  ShiptoState  :string,
        public  ShiptoCountry :string,
        public  ShiptoPostalCode :string
    )
    {

    }
}