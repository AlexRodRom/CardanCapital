export class StructuredProduct {
  isin: string;
  issue_date: string;
  tags: string[];
  components: ComponentProduct[];
}

export class ComponentProduct
{
  type : string;
  value : number;
  start_date: string;
  tickers?: string[];
  quantity? : number;
}
