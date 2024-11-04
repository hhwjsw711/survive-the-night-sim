import { closestEntity } from "../../lib/closestEntity";
import { Entity, EntityType } from "../Entity";
import { type Position } from "../Position";
import { type ZombieSurvival } from "../ZombieSurvival";

export class Player extends Entity {
  public static Destructible = true;
  public static Health = 1;
  public static ShootDistance = Infinity;

  public token = "P";
  private game: ZombieSurvival;

  public constructor(game: ZombieSurvival, position: Position, token?: string) {
    super(EntityType.Player, Player.Destructible, Player.Health, position);
    this.game = game;

    if (token !== undefined) {
      this.token = token;
    }
  }

  public getToken(): string {
    return this.token;
  }

  public shoot() {
    if (this.dead()) {
      return;
    }

    const zombie = closestEntity(this, this.game.getZombies());
    zombie.hit();
  }
}