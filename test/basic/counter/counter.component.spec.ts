import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compile: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match with snapshots', () => {
    expect(compile).toMatchSnapshot();
  });

  test('should  increseBy (+5) ', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });
  test('should  do click un btns increase +1 or -1 ', () => {
    const btn = compile.querySelectorAll('button');
    btn[0].click();
    expect(component.counter).toBe(11);
    btn[1].click();
    btn[1].click();
    expect(component.counter).toBe(9);
  });

  test('should counter update h1', () => {
    component.increaseBy(10);
    fixture.detectChanges();

    const h1 = compile.querySelector('h1');

    expect(h1?.innerHTML).toContain('20');
  });
});
