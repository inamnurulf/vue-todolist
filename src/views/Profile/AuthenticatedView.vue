<template>
  <div
    class="relative bg-white w-full max-h-full overflow-y-auto m-5 rounded-lg"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg">Card Tables</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead class="bg-slate-100">
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Project
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Completed
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <th class="text-start">
              <div class="font-bold text-base">
                {{ item?.title }}
                <span class="font-thin text-xs"> #{{ item?.id }}</span>
              </div>
              <div>{{ item?.description }}</div>
            </th>
            <th>
              <div>{{ item?.completed }}</div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authors-table',
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Task 1',
          description: 'Complete first task',
          completed: true
        },
        {
          id: 2,
          title: 'Project A',
          description: 'Work on project proposal',
          completed: false
        },
        {
          id: 3,
          title: 'Meeting with Team',
          description: 'Attend team meeting at 10 AM',
          completed: true
        },
        {
          id: 4,
          title: 'Research Paper',
          description: 'Conduct research for upcoming paper',
          completed: false
        },
        {
          id: 5,
          title: 'Exercise',
          description: 'Go for a 30-minute jog',
          completed: true
        },
        {
          id: 6,
          title: 'Grocery Shopping',
          description: 'Buy groceries for the week',
          completed: false
        },
        {
          id: 7,
          title: 'Read Book',
          description: "Finish reading 'The Great Gatsby'",
          completed: true
        },
        {
          id: 8,
          title: 'Code Refactoring',
          description: 'Refactor codebase for better performance',
          completed: false
        },
        {
          id: 9,
          title: 'Learn a New Skill',
          description: 'Take an online course on data science',
          completed: false
        },
        {
          id: 10,
          title: 'Plan Vacation',
          description: 'Plan a vacation for the upcoming holiday',
          completed: true
        }
      ]
    }
  }
}
</script>
