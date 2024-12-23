import { Page, PageTitle } from "@/components/Page";

export default function RulesPage() {
  return (
    <Page>
      <PageTitle>Rules</PageTitle>
      <div className="items-center justify-around">
        <h2 className="pb-4 text-xl">Placing rules</h2>
        <ul className="list-inside list-disc flex-wrap space-y-2">
          <li>
            You will see a map with both zombies and rocks, you are be able to
            place a player and two blocks on the map.
          </li>
          <li>
            You can not place the player or blocks in locations already used by
            zombies or rocks.
          </li>
          <li>You must place at least player before starting the game.</li>
        </ul>
        <h2 className="py-4 text-xl">Playing rules</h2>
        <ul className="list-inside list-disc flex-wrap space-y-2">
          <li>
            You will see a map with both zombies and rocks, you are be able to
            place a player and two blocks on the map.
          </li>
          <li>
            Your goal is for the player to survive the zombie attack.
            Zombie&#39;s have 2 health and if a zombie reaches the player you
            lose.
          </li>
          <li>
            Zombies can only move horizontally or vertically and they will
            always try to move towards the player.
          </li>
          <li>
            It takes two turns for the zombie to destroy a block, and they
            cannot destroy rocks.
          </li>
        </ul>
        <h2 className="py-4 text-xl">Tips and Tricks</h2>
        <ul className="list-inside list-disc flex-wrap space-y-2">
          <li>
            Often it&#39;s good to wall off between the zombies and players if
            possible, as this will slow zombies down.
          </li>
          <li>You should never put a player directly next to a zombie.</li>
          <li>
            If the player is behind a choke point, blocking the path to the
            player is the best option.
          </li>
        </ul>
      </div>
    </Page>
  );
}
