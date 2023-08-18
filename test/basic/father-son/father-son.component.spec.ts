import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should be match with snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('should not render btn if clients doestn exist', () => {
    const btn = compiled.querySelectorAll('button');
    expect(btn.length).toBe(0);
  });
  test('should  render two btn if clients  exist', () => {
    component.client = { id: 1, name: 'test' };
    fixture.detectChanges();
    const btn = compiled.querySelectorAll('button');
    expect(btn.length).toBe(2);
  });
  test('should be match with snapshow if exist client', () => {
    component.client = { id: 1, name: 'test' };
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  test('should be emit event on delete', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));
    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('debe de emitir onClientUpdated con el boton de "Cambiar ID"', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdate, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-change-id]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'Juan',
    });
  });

  test('should emit onchangeClient with ID if clientExist', () => {
    jest.spyOn(component.onClientUpdate, 'emit');
    component.onChange(5);

    expect(component.onClientUpdate.emit).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    component.onChange(1);
    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({
      id: 1,
      name: 'Juan',
    });
  });
});
