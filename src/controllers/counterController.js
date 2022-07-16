import { StateController } from "ajwahjs";
import { tap, delay, map } from 'rxjs/operators';

export class CounterController extends StateController {
  
  constructor() {
    super({count:0, loading:false});
  }

  increment() {
    this.emit({count:this.state.count + 1});
  }

  decrement() {
    this.emit({count:this.state.count - 1});
  }

  async asyncInc(){
    this.emit({loading:true});
    await this.delay(1000);
    this.emit({count:this.state.count + 1, loading:false});
  }

  asyncIncBy = this.effect((num$) =>num$.pipe(
    tap((_) => this.emit({ loading: true })),
    delay(1000),
    map((by) =>({ count: this.state.count + by, loading: false }))
  )
);

  delay(millisecond){
    return new Promise(resolve=>{
      setTimeout(()=>{resolve();}, millisecond)
    })
  }
}

