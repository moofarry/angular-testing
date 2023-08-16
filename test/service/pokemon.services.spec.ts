import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PokemonService } from '../../src/app/basic/services/pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonService],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get info about bulbasaur', (done) => {
    service.getPokemon(1).subscribe((pkm) => {
      expect(pkm.name).toBe('bulbasaur');
      done();
    });
  });
});
