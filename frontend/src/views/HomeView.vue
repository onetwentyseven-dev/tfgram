<template>
  <div class="container">
    <div class="row">
      <div class="col mt-2">
        <button class="btn btn-primary" @click="addNode">Add Node</button>
      </div>
    </div>
    <div class="row">
      <div class="col mt-2">
        <ejs-diagram
          id="diagram"
          :width="diagramWidth"
          :height="diagramHeight"
          :nodes="nodes"
          :nodeTemplate="'Template'"
        >
          <template>
            <div class="container">
              <div class="row">
                <div class="col mt-2">
                  <form>
                    <input class="form-control" />
                  </form>
                </div>
              </div>
            </div>
          </template>
        </ejs-diagram>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams'
const diagramWidth = '100%'
const diagramHeight = '550px'
const nodes = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 200,
    offsetY: 500,
    // Size of the node
    width: 100,
    height: 100,
    shape: {
      fill: '#6BA5D7',
      strokeColor: 'white'
      // type: 'HTML'
    }
  }
]

let diagramInstance: Diagram
// let diagramObj: any = document.getElementById("diagram");
// diagramInstance = diagramObj.ej2_instances[0];
// diagramInstance.select([diagramInstance.nodes[0]]);

const addNode2 = () => {
  console.log('Node Push')
  nodes.push({
    id: Date.now().toString(),
    // Position of the node
    offsetX: 200,
    offsetY: 500,
    // Size of the node
    width: 100,
    height: 100,
    shape: {
      fill: '#6BA5D7',
      strokeColor: 'white'
      // type: 'HTML'
    }
  })

  console.log(nodes)
}
// const connectors = []
</script>

<style scoped></style>
